#### README ###

Do a Google search with a single click from your DuckDuckGo result list. Sometimes a DDG search don't give the answer you want, so sometimes it can be handy to perform a Google search.


![2017-01-10 17_22_52-bitbucket op DuckDuckGo.png](https://bitbucket.org/repo/o6Bg65/images/1667346299-2017-01-10%2017_22_52-bitbucket%20op%20DuckDuckGo.png)
### How do I get set up? ###

####Load the app####
To load your app, bring up the apps and extensions management page by clicking the settings icon  and choosing Tools > Extensions.

Make sure the Developer mode checkbox has been selected.

Click the Load unpacked extension button, navigate to your app's folder and click OK.

####Open new tab and launch####
Once you've loaded your app, open a New Tab page and click on your new app icon.

####Or, load and launch from command line####
These command line options to Chrome may help you iterate:

* **--load-and-launch-app=/path/to/app/** installs the unpacked application from the given path, and launches it. If the application is already running it is reloaded with the updated content.

* **--app-id=ajjhbohkjpincjgiieeomimlgnll** launches an app already loaded into Chrome. It does not restart any previously running app, but it does launch the new app with any updated content.