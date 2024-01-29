#include <stdio.h>
#include <string.h>

void mcastIp2Mac(const char *ip, char *macStr) {
  int ip_byte_2, ip_byte_3, ip_byte_4;
  int mac_byte_4, mac_byte_5, mac_byte_6;
  char mac[18];

  sscanf(ip, "%*d.%d.%d.%d", &ip_byte_2, &ip_byte_3, &ip_byte_4);

  mac_byte_4 = ip_byte_2 & 127;
  mac_byte_5 = ip_byte_3 & 255;
  mac_byte_6 = ip_byte_4 & 255;

  sprintf(mac, "01:00:5E:%02X:%02X:%02X", mac_byte_4, mac_byte_5, mac_byte_6);

  strcpy(macStr, mac);
}