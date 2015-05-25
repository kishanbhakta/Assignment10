$(document).ready(function (){

var dataList = $('#productGrid');
var dataImage, dataTitle, dataPrice, dataCurrencyCode, dataShop, dataBox;
var urlImage, belowTitle, priceAndCurrency;

items.results.forEach(function(item) {

  urlImage = item.Images[0].url_170x135;
  dataTitle = '<div class="resultsTitle">' + item.title + '</div>';
  dataShop = '<div class="resultsShop">' + item.Shop.shop_name + '</div>';
  dataPrice = '<div class="resultsPrice">' + '$' + item.price + '</div>';
  dataCurrencyCode = '<div class="resultsCurrencyCode">' + item.currency_code + '</div>';
  dataImage = '<img src="' + urlImage + '" />';
  priceAndCurrency = '<div class="priceAndCurrency">' + dataPrice + ' ' + dataCurrencyCode + '</div>';
  belowTitle = '<div class="belowTitle">' + dataShop + priceAndCurrency  + '</div>';
  dataBox = '<li>' + dataImage + dataTitle + '\n' + belowTitle + '</li>';

  resultsList.append(dataBox);

  });

});
