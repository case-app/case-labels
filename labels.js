/**
 * Inspired by @Isaddo original script: https://gist.github.com/Isaddo/7efebcb673a0957b9c6f07cd14826ea4
 * Adds descriptions per @NillerMedDild https://gist.github.com/Isaddo/7efebcb673a0957b9c6f07cd14826ea4#gistcomment-2715349
 * 
 * Changes include:
 *  - CSS selectors use `js` prefix
 * 
 * Last tested 2019-July-27:
 *  - Chrome 75.0.3770.142
 *  - Safari 12.1.2
 *  - macOS 10.14.6
 */


 function createLabel( label ) {
    document.querySelector( '.js-new-label-name-input' ).value = label.name;
    document.querySelector( '.js-new-label-description-input' ).value = label.description;
    document.querySelector( '.js-new-label-color-input' ).value = '#' + label.color;
    document.querySelector( '.js-details-target ~ .btn-primary' ).disabled = false;
    document.querySelector( '.js-details-target ~ .btn-primary' ).click();
}

function updateLabel( label ) {
    let updatedLabel = false;
    [].slice.call( document.querySelectorAll( '.js-labels-list-item' ) ).forEach( element => {
        if ( element.querySelector( '.js-label-link' ).textContent.trim() === label.name ) {
            updatedLabel = true;
            element.querySelector( '.js-edit-label' ).click();
            element.querySelector( '.js-new-label-name-input' ).value = label.name;
            element.querySelector( '.js-new-label-description-input' ).value = label.description;
            element.querySelector( '.js-new-label-color-input' ).value = '#' + label.color;
            element.querySelector( '.js-edit-label-cancel ~ .btn-primary' ).click();
        }
    });
    return updatedLabel;
}

function createOrUpdate( label ) {
    if ( !updateLabel( label ) ) {
        createLabel( label );
    }
}

[
    
  {
    "name": "angular-library",
    "description": "Area: Angular library",
    "color": "F7AB14"
  },
  {
    "name": "🏁  Beta",
    "description": "Release phases: Feature in Beta version. To validate before any deployment / Release",
    "color": "53CF9F"
  },
  {
    "name": "Blocked",
    "description": null,
    "color": "EC8597"
  },
  {
    "name": "bug",
    "description": null,
    "color": "d73a4a"
  },
  {
    "name": "client",
    "description": "Area: Client",
    "color": "F7AB14"
  },
  {
    "name": "create-edit",
    "description": "Case element: create-edit",
    "color": "500C98"
  },
  {
    "name": "dependencies",
    "description": null,
    "color": "0366d6"
  },
  {
    "name": "Doc",
    "description": "Area: Doc",
    "color": "F7AB14"
  },
  {
    "name": "duplicate",
    "description": null,
    "color": "cfd3d7"
  },
  {
    "name": "enhancement",
    "description": null,
    "color": "a2eeef"
  },
  {
    "name": "💬  Exploring",
    "description": "Release phases: this function is under discussion / proposal. it shouldn't be an issue",
    "color": "53CF9F"
  },
  {
    "name": "Field",
    "description": "Case element: Field",
    "color": "500C98"
  },
  {
    "name": "Yield",
    "description": "Case element: Yield",
    "color": "500C98"
  },
  {
    "name": "Website",
    "description": "Area: CASE website",
    "color": "F7AB14"
  },
  {
    "name": "🛠️. To implement",
    "description": "Release phases: To implement",
    "color": "500C98"
  },
  {
    "name": "Filter",
    "description": "Case element: Filter",
    "color": "500C98"
  },
  {
    "name": "good first issue",
    "description": null,
    "color": "7057ff"
  },
  {
    "name": "help wanted",
    "description": null,
    "color": "E8CEC4"
  },
  {
    "name": "inputs",
    "description": "Case element: Inputs",
    "color": "500C98"
  },
  {
    "name": "invalid",
    "description": null,
    "color": "e4e669"
  },
  {
    "name": "List",
    "description": "Case element: List",
    "color": "500C98"
  },
  {
    "name": "Nest library",
    "description": "Area: Nest library",
    "color": "F7AB14"
  },
  {
    "name": "Priority",
    "description": null,
    "color": "B60205"
  },
  {
    "name": "question",
    "description": null,
    "color": "E09392"
  },
  {
    "name": "✅  Ready",
    "description": "Release phases: The feature is deployed and ready to use by the users.",
    "color": "53CF9F"
  },
  {
    "name": "refactor",
    "description": null,
    "color": "FEF2C0"
  },
  {
    "name": "regression",
    "description": null,
    "color": "D192BF"
  },
  {
    "name": "Schematics",
    "description": "Area: Schematics",
    "color": "F7AB14"
  },
  {
    "name": "Server",
    "description": "Area: Server",
    "color": "F7AB14"
  },
  {
    "name": "Setup",
    "description": "Case element: Setup",
    "color": "500C98"
  },
  {
    "name": "Style",
    "description": "Case element: Style",
    "color": "500C98"
  },
  {
    "name": "🎨  To design",
    "description": "release phases: Provide UI",
    "color": "53CF9F"
  },
  {
    "name": "📄  To document",
    "description": "Release phase: This feature is developed and needs documentation",
    "color": "53CF9F"
  }
].forEach( label => createOrUpdate( label ) );
