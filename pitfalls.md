# Something wrong with Compiling Podfile Dependencies

```
# try
# add this to Podfile
use_frameworks! :linkage => :static
# then
cd ios
rm -rf Pods Podfile.lock
xcodebuild clean -workspace componenttests.xcworkspace -scheme componenttests -configuration Debug
rm -rf ~/Library/Developer/Xcode/DerivedData
```
