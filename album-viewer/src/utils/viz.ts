import * as d3 from 'd3';

d3.json('/workspaces/gh-copilot-demo/album-viewer/data/albums.json').then((data) => {
    const width = 800;
    const height = 600;

    const svg = d3.select('body')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    // Example: visualize album titles as circles
    svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', (d, i) => 50 + i * 80)
        .attr('cy', height / 2)
        .attr('r', 30)
        .attr('fill', 'steelblue');

    svg.selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .attr('x', (d, i) => 50 + i * 80)
        .attr('y', height / 2 + 50)
        .attr('text-anchor', 'middle')
        .text((d: any) => d.title)
        .attr('font-size', '14px')
        .attr('fill', 'black');
});
