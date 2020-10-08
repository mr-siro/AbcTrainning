# setting evironment start react-native

#  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

# brew install yarn

# brew install node

# brew install watchman

# brew tap AdoptOpenJDK/openjdk

# brew cask install adoptopenjdk8

# npm install -g react-native-cli

# touch ~/.bash_profile

# open ~/.bash_profile

# copy and paste this

# export ANDROID_HOME=\$HOME/Library/Android/sdk

# export PATH=$PATH:$ANDROID_HOME/emulator

# export PATH=$PATH:$ANDROID_HOME/tools

# export PATH=$PATH:$ANDROID_HOME/tools/bin

# export PATH=$PATH:\$ANDROID_HOME/platform-tools

# save

# install adb on mac

brew cask install android-platform-tools
# install Cocapod
sudo gem install cocoapods
# build ios

cd ios && pod install

open myProject.xcworkspace and click run

# build android

open android studio => open existing project => select android folder in project
open AVD manager then create virtual devices => click run in project

# clean build ios

rm -rf /ios/build and rm -rf ~/Library/Developer/Xcode/DerivedData

# clean build android

cd android => ./gradlew clean

# setting vector icon ios
add line: pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
under line:   use_react_native!(:path => config["reactNativePath"]) in podfile
package.json:add in script:  "postinstall": "sed -i '' '/s.resources/d' ./node_modules/react-native-vector-icons/RNVectorIcons.podspec && npx jetify"
