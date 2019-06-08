# amphtml-validator-rules

Get all the rules that the [`amphtml-validator`][amphtml-validator] uses.

[amphtml-validator]: https://www.npmjs.com/package/amphtml-validator

## Purpose

Easy way to inspect the definition of certain [AMPHTML][amphtml] components.
Makes it convenient for other libraries that are built on top of
[AMPHTML][amphtml], like [`react-amphtml`][react-amphtml].

[amphtml]: https://github.com/ampproject/amphtml
[react-amphtml]: https://github.com/dfrankland/react-amphtml

## Example

```js
const { tags } = require('amphtml-validator-rules');

console.log((
  tags.filter(({ tagName }) => tagName.toLowerCase() === 'template')
));
```

Prints the following:
```js
[
  {
    htmlFormat: [],
    tagName: 'TEMPLATE',
    specName: null,
    extensionSpec: null,
    requiresExtension: ['amp-mustache'],
    mandatory: false,
    mandatoryAlternatives: null,
    unique: false,
    uniqueWarning: false,
    mandatoryParent: null,
    mandatoryAncestor: null,
    mandatoryAncestorSuggestedAlternative: null,
    disallowedAncestor: ['TEMPLATE'],
    descendantTagList: null,
    alsoRequiresTagWarning: [],
    satisfies: [],
    requires: [],
    deprecation: null,
    deprecationUrl: null,
    attrs: [167],
    attrLists: [],
    cdata: null,
    childTags: null,
    siblingsDisallowed: false,
    mandatoryLastChild: false,
    referencePoints: [],
    specUrl: null,
    ampLayout: null,
  },
]
```

## Development

To build `amphtml-validator-rules` Docker is needed because the validation rules
require Python and Protobuf to compile. Once, those are installed, build by
running `npm run prepublishOnly`.
