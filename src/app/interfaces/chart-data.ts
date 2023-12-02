import { ChartDataset } from "chart.js";
import { Dataset } from "./dataset";

export interface StackedBarData {
    labels : Array<string>;
    datasets : Array<Dataset>;
}
