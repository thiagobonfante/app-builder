import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import CheckboxGroup from 'ui/digital-exchange/common/CheckboxGroup';
import SidebarFilter from 'ui/digital-exchange/common/SidebarFilter';
import { formattedText } from '@entando/utils';

class MarketplaceFilterBody extends Component {
  componentWillMount() {
    this.props.onWillMount();
  }

  render() {
    const options = this.props.digitalExchangeMarketplaces.map(marketplace => (
      { label: marketplace.name, value: marketplace.id }
    ));

    return (
      <SidebarFilter title={formattedText('digitalExchange.sidebar.marketplaceFilterTitle')}>
        <CheckboxGroup
          name="marketplaces"
          options={options}
          onChange={this.props.onChange}
        />
      </SidebarFilter>
    );
  }
}

MarketplaceFilterBody.propTypes = {
  digitalExchangeMarketplaces: PropTypes.arrayOf(PropTypes.object).isRequired,
  onWillMount: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

const MarketplaceFilter = reduxForm({
  form: 'marketplaceFilter',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(MarketplaceFilterBody);

export default MarketplaceFilter;