// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import CollapsibleCode from '@site/src/components/CollapsibleCode';
import Optional from '@site/src/components/Optional';
import Indent from '@site/src/components/Indent';
import Row from '@site/src/components/Row';
import Grid from '@site/src/components/Grid';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  CollapsibleCode,
  Optional,
  Indent,
  Row,
  Grid,
};
