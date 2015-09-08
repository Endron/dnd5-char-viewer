angular.module('charViewer.attribute.modifier', [])

    .filter('attributeModifier', AttributeModifier);

function AttributeModifier() {
    return function(input) {
        var result = Math.floor((input - 10) / 2);
        if (result > 0) {
            return '+' + result;
        } else {
            return result;
        }
    }
}
