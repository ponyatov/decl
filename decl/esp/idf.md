# [[ESP-IDF]]

```decl
@build
sw espidf:sdk {
	version = 5.4.4
	github  = https://github.com/espressif/esp-idf.git
	path    = ~/esp/idf
}
```
```sh
mkdir ~/esp
git clone --depth 1 -b v5.4.4 --recursive https://github.com/espressif/esp-idf.git ~/esp/idf
```
