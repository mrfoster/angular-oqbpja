import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFormOptions, FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: []
})
export class AppComponent {
  name = "Angular";

  form = new FormGroup({});
  model: any = {
    Radio: 1
  };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: "Radio",
      type: "radio",
      templateOptions: {
        label: "Radio",
        placeholder: "Placeholder",
        description: "Description",
        required: true,
        options: [
          { value: 1, label: "Option 1", disabled: true },
          { value: 2, label: "Option 2", disabled: true },
          { value: 3, label: "Option 3", disabled: true },
          { value: 4, label: "Option 4", disabled: true }
        ]
      }
    }
  ];
}
