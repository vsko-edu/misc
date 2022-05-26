function FindProxyForURL(url, host) {
//  if (isInNet(host, "192.168.0.0", "255.255.255.0")) {
//    return "DIRECT";
//  } else {
//    if (shExpMatch(url, "http:*")) return "PROXY 192.168.0.200:3128; DIRECT";
//    if (shExpMatch(url, "https:*")) return "PROXY 192.168.0.200:3128; DIRECT";
//    if (shExpMatch(url, "ftp:*")) return "PROXY 192.168.0.200:2121; DIRECT";
//    if (shExpMatch(url, "socks:*")) return "SOCKS 192.168.0.200:1080; DIRECT";
//    return "SOCKS5 192.168.0.200:9050; DIRECT";
//    return "DIRECT";
//  }
  return "SOCKS 192.168.0.200:9050; DIRECT";
}

