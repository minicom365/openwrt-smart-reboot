'use strict';
'require view';
'require form';
'require network';

return view.extend({
	load: function() {
		return Promise.all([
			network.getNetworks(),
			network.getDevices()
		]);
	},

	render: function(data) {
		var m, s, o;
		var networks = data[0] || [];
		var devices = data[1] || [];
		var ifaceMap = {};

		m = new form.Map('smart-reboot', _('Smart Reboot'),
			_('지정한 새벽 시각에 네트워크가 유휴 상태일 때만 재부팅합니다.'));

		s = m.section(form.TypedSection, 'settings', _('설정'));
		s.anonymous = true;

		o = s.option(form.Flag, 'enabled', _('기능 활성화'));
		o.rmempty = false;

		o = s.option(form.Value, 'time', _('재부팅 시각 (HH:MM)'));
		o.placeholder = '04:00';
		o.rmempty = false;
		o.validate = function(section_id, value) {
			if (!value || !value.match(/^([01][0-9]|2[0-3]):[0-5][0-9]$/))
				return _('시간 형식은 HH:MM (24시간제) 이어야 합니다. 예: 04:00');

			return true;
		};

		o = s.option(form.Flag, 'all_ifaces', _('전체 선택 (모든 인터페이스)'));
		o.rmempty = false;

		o = s.option(form.MultiValue, 'ifaces', _('모니터링 인터페이스'));
		o.widget = 'select';
		o.size = 8;
		o.depends('all_ifaces', '0');
		o.depends('all_ifaces', '');

		networks.forEach(function(netif) {
			var logical = netif.getName();
			var dev = netif.getL3Device() || netif.getL2Device() || netif.getDevice();
			var ifname = dev && dev.getName ? dev.getName() : null;

			if (!ifname || ifname === 'lo')
				return;

			ifaceMap[ifname] = ifaceMap[ifname] || { labels: [] };
			if (logical && ifaceMap[ifname].labels.indexOf(logical) < 0)
				ifaceMap[ifname].labels.push(logical);
		});

		(devices || []).forEach(function(dev) {
			var name = dev.getName();
			if (!name || name === 'lo')
				return;

			ifaceMap[name] = ifaceMap[name] || { labels: [] };
		});

		Object.keys(ifaceMap).sort().forEach(function(ifname) {
			var labels = ifaceMap[ifname].labels;
			var text = labels.length ? '%s (%s)'.format(labels.join(', '), ifname) : ifname;
			o.value(ifname, text);
		});

		o = s.option(form.Value, 'sample_seconds', _('유휴 판별 샘플 시간(초)'));
		o.datatype = 'uinteger';
		o.placeholder = '120';
		o.rmempty = false;

		o = s.option(form.Value, 'byte_threshold', _('유휴 임계값(바이트)'));
		o.datatype = 'uinteger';
		o.placeholder = '262144';
		o.rmempty = false;

		return m.render();
	}
});
