$(document).ready(function (){

var dataList = $('#productGrid');
var dataImage, dataTitle, dataPrice, dataCurrencyCode, dataShop, dataBox;
var urlImage, belowTitle, priceAndCurrency;

items.results.forEach(function(item) {

  urlImage = item.Images[0].url_170x135;
  dataTitle = '<div class="dataTitle">' + item.title + '</div>';
  dataShop = '<div class="dataShop">' + item.Shop.shop_name + '</div>';
  dataPrice = '<div class="dataPrice">' + '$' + item.price + '</div>';
  dataCurrencyCode = '<div class="dataCurrencyCode">' + item.currency_code + '</div>';
  dataImage = '<img src="' + urlImage + '" />';
  priceAndCurrency = '<div class="priceAndCurrency">' + dataPrice + ' ' + dataCurrencyCode + '</div>';
  belowTitle = '<div class="belowTitle">' + dataShop + priceAndCurrency  + '</div>';
  dataBox = '<li>' + dataImage + dataTitle + '\n' + belowTitle + '</li>';

  dataList.append(dataBox);

  });

});
