[![Stories in Ready](https://badge.waffle.io/junior-ales/junior-ales.github.io.svg?label=ready&title=Ready)](http://waffle.io/junior-ales/junior-ales.github.io)

# My Web Cover Page

The main idea of this project is to be a hub of my work on the web and ways to contact me

## Setup

#### Boot

One line installation of [boot](https://github.com/boot-clj/boot):

`sudo bash -c "cd /usr/local/bin && curl -fsSLo boot https://github.com/boot-clj/boot-bin/releases/download/latest/boot.sh && chmod 755 boot"`

#### SASS

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

#### PhantomJS

The cljs unit tests rely on [phantomjs](http://phantomjs.org). Installation instructions:

```
cd /opt
wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2
tar -xvf phantomjs-2.1.1-linux-x86_64.tar.bz2
cd /usr/local/bin
sudo ln -s /opt/phantomjs-2.1.1-linux-x86_64/bin/phantomjs phantomjs
```
