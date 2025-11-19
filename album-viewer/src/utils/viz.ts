import * as d3 from 'd3';

d3.json('/workspaces/gh-copilot-demo/album-viewer/data/albums.json').then((data) => {
    const width = 800;
    const height = 600;
    const margin = { top: 60, right: 40, bottom: 60, left: 60 };

    // Assume data is an array of objects: { month: string, sold: number }
    // Example: [{ month: "Jan", sold: 120 }, ...]

    // Extract months and sales
    const albumData = data as Array<{ month: string; sold: number }>;
    const months = albumData.map((d) => d.month);
    const sales = albumData.map((d) => d.sold);

    const x = d3.scalePoint()
        .domain(months)
        .range([margin.left, width - margin.right]);

    const y = d3.scaleLinear()
        .domain([0, d3.max(sales) as number])
        .nice()
        .range([height - margin.bottom, margin.top]);

    const svg = d3.select('body')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    svg.append('text')
        .attr('x', width / 2)
        .attr('y', margin.top / 2)
        .attr('text-anchor', 'middle')
        .attr('font-size', '24px')
        .text('Album Viewer');

    // X Axis
    const xAxis = d3.axisBottom(x);
    svg.append('g')
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(xAxis)
        .append('text')
        .attr('x', width / 2)
        .attr('y', margin.bottom - 10)
        .attr('fill', 'black')
        .attr('text-anchor', 'middle')
        .attr('font-size', '16px')
        .text('Month');

    // Y Axis
    const yAxis = d3.axisLeft(y);
    svg.append('g')
        .attr('transform', `translate(${margin.left},0)`)
        .call(yAxis)
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', -height / 2)
        .attr('y', -margin.left + 20)
        .attr('fill', 'black')
        .attr('text-anchor', 'middle')
        .attr('font-size', '16px')
        .text('Albums Sold');

    const line = d3.line<{ month: string; sold: number }>()
        .x((d) => x(d.month)!)
        .y((d) => y(d.sold));

    svg.append('path')
        .datum(albumData)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 2)
        .attr('d', line);

    // Optional: Add circles at each data point
    svg.selectAll('.dot')
        .data(albumData)
        .enter()
        .append('circle')
        .attr('class', 'dot')
        .attr('cx', (d) => x(d.month)!)
        .attr('cy', (d) => y(d.sold))
        .attr('r', 4)
        .attr('fill', 'steelblue');
});
