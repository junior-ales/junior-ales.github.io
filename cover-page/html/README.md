[![Stories in Ready](https://badge.waffle.io/junior-ales/junior-ales.github.io.svg?label=ready&title=Ready)](http://waffle.io/junior-ales/junior-ales.github.io)

# My Web Cover Page

The main idea of this project is to be a hub of my work on the web and ways to contact me

## Setup

In order to build this project `sassc` and `libsass` are required. Install it by running the following:

```
cd /opt
sudo git clone https://github.com/sass/sassc.git --branch 3.3.2 --depth 1
sudo git clone https://github.com/sass/libsass.git --branch 3.3.3 --depth 1
cd sassc/
sudo SASS_LIBSASS_PATH="/opt/libsass" make
cd /usr/local/bin
sudo ln -s /opt/sassc/bin/sassc sassc

```
