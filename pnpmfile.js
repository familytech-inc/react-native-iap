module.exports = {
  hooks: {
    readPackage(pkg) {
      if (pkg.name === 'react-native-iap') {
        delete pkg.scripts['install'];
      }
      return pkg;
    },
  },
};
