include $(TOPDIR)/rules.mk

PKG_NAME:=luci-app-smart-reboot
PKG_RELEASE:=4

include $(INCLUDE_DIR)/package.mk

define Package/luci-app-smart-reboot
	SECTION:=luci
	CATEGORY:=LuCI
	SUBMENU:=3. Applications
	TITLE:=LuCI support for smart-reboot
	DEPENDS:=+luci-base +smart-reboot
endef

define Package/luci-app-smart-reboot/description
LuCI support for smart-reboot package.
endef

define Build/Compile
endef

define Package/luci-app-smart-reboot/install
	$(INSTALL_DIR) $(1)/www
	$(CP) ./htdocs/* $(1)/www/

	$(INSTALL_DIR) $(1)/
	$(CP) ./root/* $(1)/
endef

$(eval $(call BuildPackage,luci-app-smart-reboot))

