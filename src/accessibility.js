'use strict';
import './components/default/reset';
import './components/default/normalize';
import './components/default/input';
import './components/default/grid';
import './components/default/application';
import './components/default/control-panel';
import './components/default/nav';
import './components/default/button';
import './components/default/input';
import './components/default/panel';
import './components/default/media';
import './components/default/typography';
import './components/default/image-alt';
import './components/default/select';
import './components/default/breadcrumbs';
import './components/default/form';
import './components/default/pagination';
import './components/default/progress';
import './components/default/radio';
import './components/default/checkbox';
import './components/default/alert';
import './components/default/collapse';
import './components/default/tabs';
import './components/default/thumbnail';
import './components/default/label';
import './components/default/badge';

import {hideShow} from './components/default/collapse';
import {tabpanel} from './components/default/tabs';
// TODO как в бустрапе активировать с помощью data
$(document).ready(function () {
    var panel1 = new tabpanel("tabpanel1", false); //табы
    var hs1 = new hideShow('button1'); //кнопка скрыть показать
});

