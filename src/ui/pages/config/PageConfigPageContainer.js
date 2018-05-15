import { connect } from 'react-redux';

import PageConfigPage from 'ui/pages/config/PageConfigPage';

import { initConfigPage, setSelectedPageOnTheFly, restoreSelectedPageConfig, applyDefaultConfig } from 'state/page-config/actions';
import { setSelectedPageModel } from 'state/page-models/actions';
import { publishSelectedPage, unpublishSelectedPage } from 'state/pages/actions';
import { getSelectedPageModelCanBeOnTheFly } from 'state/page-models/selectors';
import { getPageIsOnTheFly, getSelectedPageDiffersFromPublished, getSelectedPageConfigMatchesDefault } from 'state/page-config/selectors';
import { getSelectedPage, getSelectedPageIsPublished } from 'state/pages/selectors';
import { getLocale } from 'state/locale/selectors';
import { clearErrors } from 'state/errors/actions';


export const mapDispatchToProps = dispatch => ({
  onWillMount: () => {
    dispatch(clearErrors());
    dispatch(initConfigPage());
  },
  onWillUnmount: () => dispatch(setSelectedPageModel(null)),
  setSelectedPageOnTheFly: value => dispatch(setSelectedPageOnTheFly(value)),
  restoreConfig: () => dispatch(restoreSelectedPageConfig()),
  publishPage: () => dispatch(publishSelectedPage()),
  unpublishPage: () => dispatch(unpublishSelectedPage()),
  applyDefaultConfig: () => dispatch(applyDefaultConfig()),
});

export const mapStateToProps = (state) => {
  const selectedPage = getSelectedPage(state);
  if (!selectedPage) {
    return {};
  }
  return {
    pageName: selectedPage.titles[getLocale(state)],
    pageStatus: selectedPage.status,
    isOnTheFlyEnabled: getSelectedPageModelCanBeOnTheFly(state),
    pageIsOnTheFly: getPageIsOnTheFly(state),
    pageIsPublished: getSelectedPageIsPublished(state),
    pageDiffersFromPublished: getSelectedPageDiffersFromPublished(state),
    pageConfigMatchesDefault: getSelectedPageConfigMatchesDefault(state),
  };
};


const PageConfigPageContainer = connect(mapStateToProps, mapDispatchToProps)(PageConfigPage);
export default PageConfigPageContainer;
