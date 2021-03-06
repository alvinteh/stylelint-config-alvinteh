module.exports = {
  rules:{
    'color-hex-case': 'lower',
    'color-no-invalid-hex': true,

    'font-family-name-quotes': 'always-where-recommended',

    'font-weight-notation': 'named-where-possible',

    'function-comma-newline-after': 'never-multi-line',
    'function-comma-newline-before': 'never-multi-line',
    'function-comma-space-after': 'always',
    'function-comma-space-before': 'never',
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-parentheses-newline-inside': 'never-multi-line',
    'function-parentheses-space-inside': 'never',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',

    'number-leading-zero': 'always',
    'number-max-precision': 2,
    'number-no-trailing-zeros': true,

    'string-no-newline': true,
    'string-quotes': 'double',

    'length-zero-no-unit': true,

    'time-no-imperceptible': true,

    'unit-case': 'lower',
    'unit-no-unknown': true,
    'unit-whitelist': ['%', 'deg', 'em', 'ms', 'rem', 'px', 's', 'vh', 'vw'],

    'value-keyword-case': 'lower',
    'value-no-vendor-prefix': true,

    'value-list-comma-newline-after': 'never-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always',
    'value-list-comma-space-before': 'never',

    'custom-property-empty-line-before': 'never',
    'custom-property-no-outside-root': true,

    'shorthand-property-no-redundant-values': true,

    'property-case': 'lower',
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,

    'keyframe-declaration-no-important': true,

    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': 'never',
    'declaration-no-important': true,

    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-ignored-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-properties-order': [
      [
        'content',
        'display',
        'position',
        'top',
        'bottom',
        'left',
        'right',
        'box-sizing',
        'margin',
        'margin-top',
        'margin-bottom',
        'margin-left',
        'margin-right',
        'border',
        'border-top',
        'border-bottom',
        'border-left',
        'border-right',
        'border-radius',
        'padding',
        'padding-top',
        'padding-bottom',
        'padding-left',
        'padding-right',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height'
      ],
      {
        unspecified: 'bottomAlphabetical'
      }
    ],
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'always-single-line',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',

    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-no-empty': true,
    'block-no-single-line': true,
    'block-opening-brace-newline-after': 'always',
    'block-opening-brace-space-before': 'always',

    'selector-max-compound-selectors': 3,
    'selector-max-specificity': '0,2,0',
    'selector-no-attribute': true,
    'selector-no-combinator': true,
    'selector-no-id': true,
    'selector-no-qualifying-type': true,
    'selector-no-universal': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-root-no-composition': true,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': true,
    'selector-max-empty-lines': 0,

    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-newline-before': 'never-multi-line',
    // Disabled due to false positives when using mixins
    // 'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',

    'rule-nested-empty-line-before': [
      'always',
      {
        'except': [
          'first-nested'
        ]
      }
    ],
    'rule-non-nested-empty-line-before': 'always',

    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-no-missing-punctuation': true,
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',

    'media-query-list-comma-newline-after': 'always',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'never',
    'media-query-list-comma-space-before': 'never',

    'at-rule-empty-line-before': [
      'always',
      {
        'except': [
          'first-nested'
        ]
      }
    ],
    'at-rule-name-newline-after': 'always-multi-line',
    'at-rule-name-space-after': 'always',
    'at-rule-no-unknown': true,
    'at-rule-semicolon-newline-after': 'always',

    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',

    'indentation': 4,
    'max-empty-lines': 1,
    'max-line-length': 120,
    'max-nesting-depth': 3,
    'no-browser-hacks': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true
  }
};
