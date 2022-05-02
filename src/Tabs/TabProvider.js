import React from 'react';

import { TabController } from 'react-native-ui-lib';

import PostNews from '../PostNews';
import UpdateNews from './UpdateNews';

const TabProvider = () => (
  <TabController
    asCarousel
    items={[{ label: 'Publish News' }, { label: 'Update News' }]}>
    <TabController.TabBar />
    <TabController.PageCarousel style={{ height: '93%' }}>
      <TabController.TabPage index={0}>
        <PostNews />
      </TabController.TabPage>
      <TabController.TabPage index={1}>
        <UpdateNews />
      </TabController.TabPage>
    </TabController.PageCarousel>
  </TabController>
);

export default TabProvider;
