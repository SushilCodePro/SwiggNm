// import { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'

function App() {
  // const [count, setCount] = useState(0)
const resto=  [
  {
    "info": {
      "id": "151649",
      "name": "Hotel Sai Nath & Sai Restaurant",
      "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
      "locality": "railway station",
      "areaName": "Chhindwara Locality",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "North Indian",
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "101802",
      "avgRatingString": "4.3",
      "totalRatingsString": "994",
      "sla": {
        "deliveryTime": 44,
        "lastMileTravel": 11.3,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "11.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-05-03 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": { },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": { },
          "textExtendedBadges": { }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": { },
          "video": { }
        }
      },
      "reviewsSummary": { },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": { },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-4251fd4b-c437-4e6b-8d54-7b160d053d2f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "151518",
      "name": "Bakery World",
      "cloudinaryImageId": "mt2aggiscfl3yviatwng",
      "locality": "Parasia Road",
      "areaName": "Parasia Road",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Bakery",
        "Ice Cream",
        "Snacks",
        "Beverages"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "40363",
      "avgRatingString": "4.4",
      "totalRatingsString": "262",
      "sla": {
        "deliveryTime": 47,
        "lastMileTravel": 14.1,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "14.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-05-03 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": { },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": { },
          "textExtendedBadges": { }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": { },
          "video": { }
        }
      },
      "reviewsSummary": { },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": { },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-4251fd4b-c437-4e6b-8d54-7b160d053d2f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "658210",
      "name": "The Fusion Lounge",
      "cloudinaryImageId": "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
      "locality": "Triloki nagar",
      "areaName": "Railway Station",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts"
      ],
      "avgRating": 4.1,
      "parentId": "395453",
      "avgRatingString": "4.1",
      "totalRatingsString": "339",
      "sla": {
        "deliveryTime": 59,
        "lastMileTravel": 10.2,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "10.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-05-03 23:00:00",
        "opened": true
      },
      "badges": { },
      "isOpen": true,
      "aggregatedDiscountInfoV2": { },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": { },
          "textBased": { },
          "textExtendedBadges": { }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": { },
          "video": { }
        }
      },
      "reviewsSummary": { },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": { },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-4251fd4b-c437-4e6b-8d54-7b160d053d2f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "234875",
      "name": "Adil Hotel",
      "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
      "locality": "Rautha Wada",
      "areaName": "Chhindwara Locality",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "North Indian",
        "Biryani",
        "Tandoor"
      ],
      "avgRating": 4.3,
      "parentId": "27123",
      "avgRatingString": "4.3",
      "totalRatingsString": "1.3K+",
      "sla": {
        "deliveryTime": 40,
        "lastMileTravel": 11.5,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "11.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-05-04 00:00:00",
        "opened": true
      },
      "badges": { },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": { },
          "textBased": { },
          "textExtendedBadges": { }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹129"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": { },
          "video": { }
        }
      },
      "reviewsSummary": { },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": { },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-4251fd4b-c437-4e6b-8d54-7b160d053d2f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "150591",
      "name": "Satkar Restaurant",
      "cloudinaryImageId": "rvxp5xbniat84r6efku2",
      "locality": "Sinchai Colony",
      "areaName": "Satkar Chowk",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "South Indian",
        "Indian",
        "Salads",
        "Desserts"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "21553",
      "avgRatingString": "4.4",
      "totalRatingsString": "2.7K+",
      "sla": {
        "deliveryTime": 39,
        "lastMileTravel": 11.1,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "11.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-05-03 22:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                }
              }
            ]
          },
          "textBased": { },
          "textExtendedBadges": { }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "66% OFF",
        "subHeader": "UPTO ₹130"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": { },
          "video": { }
        }
      },
      "reviewsSummary": { },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": { },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-4251fd4b-c437-4e6b-8d54-7b160d053d2f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "625927",
      "name": "Kathi Junction",
      "cloudinaryImageId": "nigqvxgzvyxtfjuqasgg",
      "locality": "Bunglow Madhuvan Colony",
      "areaName": "Prasia Road",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "rolls",
        "Burgers",
        "Pizzas",
        "Fast Food"
      ],
      "avgRating": 4.2,
      "parentId": "1935",
      "avgRatingString": "4.2",
      "totalRatingsString": "361",
      "sla": {
        "deliveryTime": 49,
        "lastMileTravel": 11,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "11.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-05-03 23:30:00",
        "opened": true
      },
      "badges": { },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": { },
          "textBased": { },
          "textExtendedBadges": { }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹999",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": { },
          "video": { }
        }
      },
      "reviewsSummary": { },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": { },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-4251fd4b-c437-4e6b-8d54-7b160d053d2f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/kathi-junction-bunglow-madhuvan-colony-prasia-road-rest625927",
      "type": "WEBLINK"
    }
  }
]
  return (
    <>
      <Navbar/>
      <Home resto={resto}/>
    </>
  )
}

export default App
