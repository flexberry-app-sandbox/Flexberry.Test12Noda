import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Jdl',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Jdl',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Jdl',
          title: 'Jdl'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        jdl: {
          caption: 'jdl',
          title: 'jdl',
          'i-i-s-test12-noda-test-main-l': {
            caption: 'Test main',
            title: ''
          },
          'i-i-s-test12-noda-test-master-l': {
            caption: 'Test master',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-test12-noda-test-main-l': IISTest12NodatestMainLForm,
    'i-i-s-test12-noda-test-master-l': IISTest12NodatestMasterLForm,
    'i-i-s-test12-noda-test-main-e': IISTest12NodatestMainEForm,
    'i-i-s-test12-noda-test-master-e': IISTest12NodatestMasterEForm
  },

});

export default translations;
