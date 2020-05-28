// Based on

exports.find = function(answers) {
  if (!answers)
    return null

  let outcomes = [];

  // --------------------------------------------------
  // TEMPLATE
  // --------------------------------------------------
  //
  // if (answers['QUESTION'] !== undefined) {
  //
  //   if (answers['QUESTION'] == 'ANSWER') {
  //     outcomes.push('SCHEME');
  //   }
  //
  // }

  outcomes.push('risk_assessment');

  outcomes.push('on_site_or_remote');

  if (answers['sectors'] !== undefined) {

    if (answers['sectors'].indexOf('restaurants') !== -1) {
      outcomes.push('restaurants_takeaway_delivery');
    }

  }

  outcomes.push('social_distancing');

  if (answers['sectors'] !== undefined) {

    if (answers['sectors'].indexOf('construction') !== -1) {
      outcomes.push('construction_social_distancing');
    }

  }

  if (answers['sectors'] !== undefined) {

    if (answers['sectors'].indexOf('research') !== -1) {
      outcomes.push('labs_social_distancing');
    }

  }

  if (answers['sectors'] !== undefined) {

    if (answers['sectors'].indexOf('offices') !== -1) {
      outcomes.push('offices_social_distancing');
    }

  }

  if (answers['sectors'] !== undefined) {

    if (answers['sectors'].indexOf('homes') !== -1) {
      outcomes.push('home_social_distancing');
    }

  }

  if (answers['sectors'] !== undefined) {

    if (answers['sectors'].indexOf('restaurants') !== -1) {
      outcomes.push('restaurants_social_distancing');
    }

  }

  if (answers['sectors'] !== undefined) {

    if (answers['sectors'].indexOf('shops') !== -1) {
      outcomes.push('shops_social_distancing');
    }

  }

  if (answers['sectors'] !== undefined) {

    if (answers['sectors'].indexOf('vehicles') !== -1) {
      outcomes.push('vehicle_social_distancing');
    }

  }

  outcomes.push('cleaning');

  if (answers['sectors'] !== undefined) {

    if (answers['sectors'].indexOf('construction') !== -1) {
      outcomes.push('construction_cleaning');
    }

  }

  if (answers['sectors'] !== undefined) {

    if (answers['sectors'].indexOf('factories') !== -1) {
      outcomes.push('factories_cleaning');
    }

  }

  if (answers['sectors'] !== undefined) {

    if (answers['sectors'].indexOf('research') !== -1) {
      outcomes.push('labs_cleaning');
    }

  }

  if (answers['sectors'] !== undefined) {

    if (answers['sectors'].indexOf('offices') !== -1) {
      outcomes.push('offices_cleaning');
    }

  }

  if (answers['sectors'] !== undefined) {

    if (answers['sectors'].indexOf('homes') !== -1) {
      outcomes.push('home_cleaning');
    }

  }

  if (answers['sectors'] !== undefined) {

    if (answers['sectors'].indexOf('restaurants') !== -1) {
      outcomes.push('restaurants_cleaning');
    }

  }

  if (answers['sectors'] !== undefined) {

    if (answers['sectors'].indexOf('shops') !== -1) {
      outcomes.push('shops_cleaning');
    }

  }

  if (answers['sectors'] !== undefined) {

    if (answers['sectors'].indexOf('vehicles') !== -1) {
      outcomes.push('vehicle_cleaning');
    }

  }

  if (answers['visitors'] !== undefined) {

    if (answers['visitors'] == 'yes') {
      outcomes.push('visitors');
    }

  }

  if (answers['meetings'] !== undefined) {

    if (answers['meetings'] == 'yes') {
      outcomes.push('meetings');
    }

  }

  if (answers['travel'] !== undefined) {

    if (answers['travel'] == 'yes') {
      outcomes.push('travel');
    }

  }

  if (answers['goods'] !== undefined) {

    if (answers['goods'] == 'yes') {
      outcomes.push('goods');
    }

  }

  return outcomes;
}
