import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as d3 from "d3";
import { ComplaintService } from "src/app/Service/complaint.service";

@Component({
  selector: "stat-pie",
  templateUrl: "./pie.component.html",
  styleUrls: ["./pie.component.scss"],
})
export class PieComponent implements OnInit {
  private svg;
  private margin = 50;
  private width = 750;
  private height = 600;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors;
  statComplain: [];

  private drawBars(statComplain: any[]): void {
    // Create the X-axis band scale
    const x = d3
      .scaleBand()
      .range([0, this.width])
      .domain(statComplain.map((d) => d.complaint_Type))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg
      .append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
    .domain([0, 50])
    .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
    .call(d3.axisLeft(y));
    // Create and fill the bars
    this.svg
    .selectAll("bars")
    .data(statComplain)
    .enter()
    .append("rect")
    .attr("x", (d) => x(d.complaint_Type))
    .attr("y", (d) => y(d.nbrType))
    .attr("width", x.bandwidth())
    .attr("height", (d) => this.height- y(d.nbrType))
    .attr("fill", "#d04a35");
    
     /*  .selectAll("bars")
      .data(this.data)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.Framework))
      .attr("y", (d) => y(d.Stars))
      .attr("width", x.bandwidth())
      .attr("height", (d) => this.height - y(d.Stars))
      .attr("fill", "#d04a35");
  } */

}

  private createSvg(): void {
    this.svg = d3
      .select("figure#bar")
      .append("svg")
      .attr("width", this.width + this.margin * 2)
      .attr("height", this.height + this.margin * 2)
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
      
  }

  // private drawChart(): void {
  //   // Compute the position of each group on the pie:
  //   const pie = d3.pie<any>().value((d: any) => Number(d.Stars));

  //   // Build the pie chart
  //   this.svg
  //     .selectAll("pieces")
  //     .data(pie(this.data))
  //     .enter()
  //     .append("path")
  //     .attr("d", d3.arc().innerRadius(0).outerRadius(this.radius))
  //     .attr("fill", (d, i) => this.colors(i))
  //     .attr("stroke", "#121926")
  //     .style("stroke-width", "1px");

  //   // Add labels
  //   const labelLocation = d3.arc().innerRadius(100).outerRadius(this.radius);

  //   this.svg
  //     .selectAll("pieces")
  //     .data(pie(this.data))
  //     .enter()
  //     .append("text")
  //     .text((d) => d.data.Framework)
  //     .attr("transform", (d) => "translate(" + labelLocation.centroid(d) + ")")
  //     .style("text-anchor", "middle")
  //     .style("font-size", 15);
  // }

  data = [
    {
      nbrType: 28.0,
      complaint_Type: "Others",
    },
    {
      nbrType: 12.0,
      complaint_Type: "Technical",
    },
    {
      nbrType: 7.0,
      complaint_Type: "Social",
    },
  ];
  constructor(
    public complaintService: ComplaintService,
    public router: Router
  ) {}

  private createColors(): void {
    this.colors = d3
      .scaleOrdinal()
      .domain(this.data.map((d) => d.complaint_Type.toString()))
      .range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);
  }

  ngOnInit() {
    console.log(this.data);
    this.createSvg();
    this.drawBars(this.data)
  /*   this.complaintService.retrieves().subscribe((response) => {
      console.log(response);
      console.log(this.statComplain)
      this.statComplain = response;
      ;
    }); */

    // this.complaintService.statComplaint()).subscribe((response) => {
    // console.log(response);
    // this.statComplain = response;
    // this.drawBars(this.data);
    // console.log(this.drawBars(this.data));
  } //)
}
