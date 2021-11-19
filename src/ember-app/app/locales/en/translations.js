import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTest12NodatestMainLForm from './forms/i-i-s-test12-noda-test-main-l';
import IISTest12NodatestMasterLForm from './forms/i-i-s-test12-noda-test-master-l';
import IISTest12NodatestMainEForm from './forms/i-i-s-test12-noda-test-main-e';
import IISTest12NodatestMasterEForm from './forms/i-i-s-test12-noda-test-master-e';
import IISTest12NodatestDetailModel from './models/i-i-s-test12-noda-test-detail';
import IISTest12NodatestMainModel from './models/i-i-s-test12-noda-test-main';
import IISTest12NodatestMasterModel from './models/i-i-s-test12-noda-test-master';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test12-noda-test-detail': IISTest12NodatestDetailModel,
    'i-i-s-test12-noda-test-main': IISTest12NodatestMainModel,
    'i-i-s-test12-noda-test-master': IISTest12NodatestMasterModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        jdl: {
          caption: 'jdl',
          title: 'jdl',
          'i-i-s-test12-noda-test-main-l': {
            caption: 'i-i-s-test12-noda-test-main-l',
            title: 'i-i-s-test12-noda-test-main-l'
          },
          'i-i-s-test12-noda-test-master-l': {
            caption: 'i-i-s-test12-noda-test-master-l',
            title: 'i-i-s-test12-noda-test-master-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test12-noda-test-main-l': IISTest12NodatestMainLForm,
    'i-i-s-test12-noda-test-master-l': IISTest12NodatestMasterLForm,
    'i-i-s-test12-noda-test-main-e': IISTest12NodatestMainEForm,
    'i-i-s-test12-noda-test-master-e': IISTest12NodatestMasterEForm
  },

});

export default translations;
