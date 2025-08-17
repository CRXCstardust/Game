document.addEventListener('scroll', function(e) {
    const scrollPosition = window.pageYOffset;
    const layers = document.querySelectorAll('.parallax-layer');

    layers.forEach(layer => {
        // Get the depth value from the transform style (e.g., -2px, -1px)
        const depth = parseFloat(getComputedStyle(layer).transform.split('translateZ(')[1]);
        
        // Calculate the new transform value.
        // The further back the layer (more negative depth), the faster it moves.
        // This creates the parallax effect.
        const movement = -scrollPosition * depth;

        // Apply the new transform. We only need to change the Y-axis translation.
        layer.style.transform = `translateY(${movement}px) translateZ(${depth}px)`;
    });
});
