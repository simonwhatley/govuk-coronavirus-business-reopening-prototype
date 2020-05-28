// Based on

exports.find = function(answers) {
  if (!answers)
    return null

  let outcomes = [];

  // --------------------------------------------------
  // TEMPLATE
  // --------------------------------------------------

  if (answers['QUESTION'] !== undefined) {

    if (answers['QUESTION'] == 'ANSWER') {
      outcomes.push('SCHEME');
    }

  }

  outcomes.push('risk_assessment');
  outcomes.push('on_site_or_remote');
  outcomes.push('restaurants_takeaway_delivery');
  outcomes.push('social_distancing');
  outcomes.push('construction_social_distancing');
  outcomes.push('labs_social_distancing');
  outcomes.push('offices_social_distancing');
  outcomes.push('home_social_distancing');
  outcomes.push('restaurants_social_distancing');
  outcomes.push('shops_social_distancing');
  outcomes.push('vehicle_social_distancing');
  outcomes.push('cleaning');
  outcomes.push('construction_cleaning');
  outcomes.push('factories_cleaning');
  outcomes.push('labs_cleaning');
  outcomes.push('offices_cleaning');
  outcomes.push('home_cleaning');
  outcomes.push('restaurants_cleaning');
  outcomes.push('shops_cleaning');
  outcomes.push('vehicle_cleaning');
  outcomes.push('visitors');
  outcomes.push('meetings');
  outcomes.push('travel');
  outcomes.push('goods');

  return outcomes;
}
