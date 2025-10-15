import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TagManager from 'react-gtm-module';

const GTMListener = () => {
  const location = useLocation();

  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'pageview',
        page: location.pathname + location.search,
      },
    });
  }, [location]);

  return null;
};

export default GTMListener;
