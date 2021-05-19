import { upperFirst, camelCase } from 'lodash-es';

export default {
  install(app) {
    const baseComponents = require.context(
      '../components/base/', false, /[A-Za-z0-9-_,\s]+\.vue$/i,
    );

    baseComponents.keys().forEach((fileName) => {
      const componentConfig = baseComponents(fileName);
      const componentName = upperFirst(
        camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')),
      );

      // console.log(fileName, componentName);

      // export default
      app.component(
        `Base${componentName}`, componentConfig.default || componentConfig,
      );
    });
  },
};
