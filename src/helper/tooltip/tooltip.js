
export function tooltip() {
    const sheet = new CSSStyleSheet();

    const button = document.querySelector('.coin-info');
    const tooltip = document.querySelector('#tooltip');

    const popperInstance = Popper.createPopper(button, tooltip, {
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 8],
                },
            },
        ],
    });

    function show() {
        // Make the tooltip visible
        tooltip.setAttribute('data-show', '');

        // Enable the event listeners
        popperInstance.setOptions((options) => ({
            ...options,
            modifiers: [
                ...options.modifiers,
                { name: 'eventListeners', enabled: true },
            ],
        }));

        // Update its position
        popperInstance.update();
    }

    function hide() {
        // Hide the tooltip
        tooltip.removeAttribute('data-show');

        // Disable the event listeners
        popperInstance.setOptions((options) => ({
            ...options,
            modifiers: [
                ...options.modifiers,
                { name: 'eventListeners', enabled: false },
            ],
        }));
    }

    const showEvents = ['mouseenter', 'focus'];
    const hideEvents = ['mouseleave', 'blur'];

    showEvents.forEach((event) => {
        button.addEventListener(event, show);
    });

    hideEvents.forEach((event) => {
        button.addEventListener(event, hide);
    });


    sheet.replaceSync(`
    #tooltip {
        background: #333;
        color: white;
        font-weight: bold;
        padding: 4px 8px;
        font-size: 13px;
        border-radius: 4px;
        display: none;
      }
    
      #tooltip[data-show] {
        display: block;
      }
    
      #arrow,
      #arrow::before {
        position: absolute;
        width: 8px;
        height: 8px;
        background: inherit;
      }
    
      #arrow {
        visibility: hidden;
      }
    
      #arrow::before {
        visibility: visible;
        content: '';
        transform: rotate(45deg);
      }
    
      #tooltip[data-popper-placement^='top'] > #arrow {
        bottom: -4px;
      }
    
      #tooltip[data-popper-placement^='bottom'] > #arrow {
        top: -4px;
      }
    
      #tooltip[data-popper-placement^='left'] > #arrow {
        right: -4px;
      }
    
      #tooltip[data-popper-placement^='right'] > #arrow {
        left: -4px;
      }
        `);

    document.adoptedStyleSheets = [sheet];

}