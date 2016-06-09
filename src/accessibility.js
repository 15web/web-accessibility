'use strict';

// ==========================================================================
// Utils
// ==========================================================================

import './components/utils/normalize';
import './components/utils/reset';

// ==========================================================================
// Default components
// ==========================================================================

// Application
import './components/default/application';

// Control panel
import './components/default/control-panel';

// Grid systems
import './components/default/grid';

// Typography
import './components/default/typography';

// Images
import './components/default/image-alt';

// Form elements
import './components/default/form';
import './components/default/fieldset';
import './components/default/label';
import './components/default/textarea';
import './components/default/radio';
import './components/default/checkbox';
import './components/default/select';
import './components/default/button';
import './components/default/input';
import './components/default/input';

// ==========================================================================
// Additional components
// ==========================================================================

// Alerts
import './components/additional/alert';

// Media object
import './components/additional/media';

// Pagination
import './components/additional/pagination';

// Tabs
import {tabsInit} from './components/additional/tabs';

// Navigation
import './components/additional/nav';

// Breadcrumbs
import './components/additional/breadcrumbs';

// Progress bar
import './components/additional/progress';

// Collapse
import {collapseInit} from './components/additional/collapse';

// Thumbnail
import './components/additional/thumbnail';

// Panels
import './components/additional/panel';

// Badge
import './components/additional/badge';

// ==========================================================================
// Initialization @TODO: Можно обойтись?
// ==========================================================================

collapseInit();
tabsInit();
