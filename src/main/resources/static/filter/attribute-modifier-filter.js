angular.module('charViewer.attribute.modifier', [])

    .filter('attributeModifier', AttributeModifier);

function AttributeModifier() {
    return function(input) {
        return Math.floor((input - 10) / 2);
    }
}
