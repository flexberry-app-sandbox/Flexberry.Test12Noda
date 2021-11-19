import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.jdl.caption'),
          title: i18n.t('forms.application.sitemap.jdl.title'),
          children: [{
            link: 'i-i-s-test12-noda-test-main-l',
            caption: i18n.t('forms.application.sitemap.jdl.i-i-s-test12-noda-test-main-l.caption'),
            title: i18n.t('forms.application.sitemap.jdl.i-i-s-test12-noda-test-main-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-test12-noda-test-master-l',
            caption: i18n.t('forms.application.sitemap.jdl.i-i-s-test12-noda-test-master-l.caption'),
            title: i18n.t('forms.application.sitemap.jdl.i-i-s-test12-noda-test-master-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }
      ]
    };
  }),
})