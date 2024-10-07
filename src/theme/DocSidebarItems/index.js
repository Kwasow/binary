import React, { memo } from 'react';
import { DocSidebarItemsExpandedStateProvider } from '@docusaurus/plugin-content-docs/client';
import DocSidebarItem from '@theme/DocSidebarItem';

import styles from './styles.module.css';

function DocSidebarItems({ items, ...props }) {
  return (
    <DocSidebarItemsExpandedStateProvider>
      {items.map((item, index) => (
        <div className={styles.wrapper} key={`${item.docId}-${index}`}>
          <DocSidebarItem item={item} index={index} {...props} />
        </div>
      ))}
    </DocSidebarItemsExpandedStateProvider>
  );
}
// Optimize sidebar at each "level"
export default memo(DocSidebarItems);
