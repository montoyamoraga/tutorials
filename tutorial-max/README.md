# tutorial-max

# tutorial-json

[English](README.md) / [Spanish](README-es.md)

## About

tutorial-max is a tutorial about how to start creating sound with [Max](https://en.wikipedia.org/wiki/Max_(software)), with a focus on [New Interfaces for Musical Expression](https://en.wikipedia.org/wiki/New_Interfaces_for_Musical_Expression).

This tutorial was written by [Aarón Montoya-Moraga](http://montoyamoraga.io/). If you want to check out more tutorials, visit [http://montoyamoraga.io/tutorials](http://montoyamoraga.io/tutorials).

It is also available in [Spanish](README-es.md). It is written in [Markdown](https://en.wikipedia.org/wiki/Markdown) and hosted in [GitHub](https://github.com/).

## Introduction

Max is a software created by [Miller Puckette](https://en.wikipedia.org/wiki/Miller_Puckette) at [IRCAM](https://en.wikipedia.org/wiki/IRCAM) in the 1980s.

Max runs in both MacOS and Windows and it is a commercial software. If you are looking for a free libre open-source alternative, please use [Pure Data](https://en.wikipedia.org/wiki/Pure_Data), which runs on Linux, MacOS and Windows.

## Prerrequisites

Before even starting, download Max and study the [Max documentation](https://docs.cycling74.com/max7/), in particular the first eight [Max Basic tutorials](https://docs.cycling74.com/max7/tutorials/00_maxindex):
* [Tutorial 1: Hello](https://docs.cycling74.com/max7/tutorials/basicchapter01)
* [Tutorial 2: Bang!](https://docs.cycling74.com/max7/tutorials/basicchapter02)
* [Tutorial 3: Numbers and lists](https://docs.cycling74.com/max7/tutorials/basicchapter03)
* [Tutorial 4: Metro and Toggle](https://docs.cycling74.com/max7/tutorials/basicchapter04)
* [Tutorial 5: Message Order and Debugging](https://docs.cycling74.com/max7/tutorials/basicchapter05)
* [Tutorial 6: Simple Math and Max](https://docs.cycling74.com/max7/tutorials/basicchapter06)
* [Tutorial 7: Numerical User Interfaces](https://docs.cycling74.com/max7/tutorials/basicchapter07)
* [Tutorial 8: Keyboard and Mouse Input](https://docs.cycling74.com/max7/tutorials/basicchapter08)

## Starter max patches

This repository includes starter Max patches, located at the folder [max-patches/](max-patches/), and including:


* [delay-effect](max-patches/delay-effect.maxpat): simple delay effect implementation
* [sample-playback](max-patches/sample-playback.maxpat): playback of samples
* [serial-reading-arduino](max-patches/serial-reading-arduino.maxpat): reading one value from Arduino
* [serial-reading-arduino-multiple-values](max-patches/serial-reading-arduino-multiple-values.maxpat): reading several values from Arduino

## General recommendations

* Use the print object for debugging.
* Don't use ezadc~ or ezdac~, use adc~ and dac~ instead, because you can double-click on them and access the Audio settings.
* Don't use too many meter~ objects, because they are very processor-intensive.

## Typical mistakes

* Not turning on/off the audio processing.
* Feedback by connecting input to output.
* Confusing between Max objects and messages.
* Not knowing the difference between cold and hot inlets.

## Projects built with Max

* [Emotions On Line](https://yiiihan.com/#/emotions-on-line/) by [Yihan Chen](https://yiiihan.com/)
* [In Triplicate](https://matt-romein.com/in_triplicate/) by [Matt Romein](https://matt-romein.com/)
* [NOMIS](http://jonathansparks.com/nomis/) by [Jonathan Sparks](http://jonathansparks.com/)
* [TK1971](http://xxx.tiri.xxx/work/tk1971/) by [Tiri Kananuruk](http://xxx.tiri.xxx/)

## References

* [Max documentation](https://docs.cycling74.com/max7/)
* [Arduino Graph example](https://www.arduino.cc/en/Tutorial/Graph)
* [New Interfaces for Musical Expression class at NYU ITP](http://itp.nyu.edu/nime/)

## Thanks

* [Rodrigo Cadiz](http://www.rodrigocadiz.com/) for introducing me to Max, computer music and media arts.
* [Pablo Garretón](http://www.pablogarreton.com/) for teaching me Max for sound art.
* [Matt Romein](https://matt-romein.com/) for teaching me Max for video art.
