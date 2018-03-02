import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Grid, Row, Col, Breadcrumb } from 'patternfly-react';
import { BreadcrumbItem } from 'frontend-common-components';

import InternalPage from 'ui/internal-page/InternalPage';
import { ROUTE_PAGE_TREE } from 'app-init/router';
import PagesAddFormContainer from 'ui/pages/add/PagesAddFormContainer';
import ErrorsAlertContainer from 'ui/common/form/ErrorsAlertContainer';


class PagesAddPage extends Component {
  componentWillMount() {
    if (this.props.onWillMount) this.props.onWillMount(this.props);
  }

  render() {
    return (
      <InternalPage className="PagesAddPage">
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <Breadcrumb>
                <BreadcrumbItem active>
                  <FormattedMessage id="menu.pageCreator" />
                </BreadcrumbItem>
                <BreadcrumbItem route={ROUTE_PAGE_TREE}>
                  <FormattedMessage id="menu.pageTree" />
                </BreadcrumbItem>
                <BreadcrumbItem active>
                  <FormattedMessage id="app.add" />
                </BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h1 className="InternalPage__page-title">
                <FormattedMessage id="app.add" />
                <i className="pficon pficon-help pull-right" />
              </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ErrorsAlertContainer />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <PagesAddFormContainer />
            </Col>
          </Row>
        </Grid>
      </InternalPage>
    );
  }
}

PagesAddPage.propTypes = {
  onWillMount: PropTypes.func,
};

PagesAddPage.defaultProps = {
  onWillMount: null,
};

export default PagesAddPage;