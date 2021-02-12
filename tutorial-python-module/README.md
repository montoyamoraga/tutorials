# tutorial-python-module

## about

how to create a python module.

this is a tutorial by [aarón montoya-moraga](http://montoyamoraga.io/). it is based on classes i took at [nyu itp](https://tisch.nyu.edu/itp).

## tutorial

python modules are collections of functions, that live on a single .py file, and can be imported in other python scripts, using import.

your module should live on one .py file. i suggest using github to have a verson control system and online backup.

create a setup.py file, that includes:

* name
* version
* url
* author
* description
* license
* packages
* install_requires
* package_data

to distribute, do on terminal

```bash
python setup.py sdist
```
```bash
twine upload dist/name-x.y.z.tar.gz
```

## installing python modules

we will use two python modules to install other modules: [pip](https://pypi.python.org/pypi/pip) and [virtualenv](https://virtualenv.pypa.io/en/stable/). pip is the recommended tool for installing python packages.

first, install pip and virtualenv globally on your machine.

when you want to use python on your software project, we will create a virtual environment where all the python dependencies will live. go to your terminal and create a virtualenv with the command-line-tool virtualenv.

in this example, we will call env our virtual environment

```bash
virtualenv env
```

to make the python interpreter aware of this virtual environment, we have to activate it

```bash
source env/bin/activate
```

your terminal should now say (env) at the beginning of each new line. this means that the environment is activated.

to install packages on this virtual environment, use pip install.

in this example we will be installing numpy

```bash
pip install numpy
```

when you want to quit the virtual environment, deactivate it

```bash
deactivate
```

## references


* [functions and modules](http://www.decontextualize.com/teaching/rwet/functions-and-modules/): notes by [allison parrish](https://www.decontextualize.com/).
* [installing python libraries](http://rwet.decontextualize.com/book/installing-python-libraries/): notes by [allison parrish](https://www.decontextualize.com/).
* [submitting packages to the package index](https://wiki.python.org/moin/CheeseShopTutorial#Submitting_Packages_to_the_Package_Index): notes on how to submit packages to the python package index.
* [packaging python libraries](http://www.diveintopython3.net/packaging.html)
* [packaging and distributing projects](https://packaging.python.org/tutorials/distributing-packages/)

## thanks

* [allison parrish](https://www.decontextualize.com/): for making me learn and love python and computer-generated poetry, for her great classes.
* [sam lavigne](http://lav.io/): for making me appreciate software libraries as art, for his great tutorials.
