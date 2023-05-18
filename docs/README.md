    Author: Camron West


This repo currently has folders and files for solutions to questions on the website "Leetcode".
The problems are intended to be used to prepare for interviews, or to merely practice data structures and algorithms.

The client Side portion of this repository includes a online code complier meant to be use intutatively with the data structures and Algo problems listed on the homepage UI.
The database for this project was deployed to Render however, in the future it will be migrated to AWS(dynamicDB).

This project initializes sqlalchemy as a database, here a the commands to operate with the database:
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
When pip is available, the distribution can be downloaded from PyPI and installed in one step:

pip install SQLAlchemy
This command will download the latest released version of SQLAlchemy from the Python Cheese Shop and install it to your system. For most common platforms, a Python Wheel file will be downloaded which provides native Cython / C extensions prebuilt.

In order to install the latest prerelease version, such as 2.0.0b1, pip requires that the --pre flag be used:

pip install --pre SQLAlchemy
Where above, if the most recent version is a prerelease, it will be installed instead of the latest released version.


When not installing from pip, the source distribution may be installed using the setup.py script:


The source install is platform agnostic and will install on any platform regardless of whether or not Cython / C build tools are installed. As the next section Building the Cython Extensions details, setup.py will attempt to build using Cython / C if possible but will fall back to a pure Python installation otherwise.

## pipenv install - to install appropriate packages for SQLALchemy and flask
## pipenv shell - to enter - pipenv shell
