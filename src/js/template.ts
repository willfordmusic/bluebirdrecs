interface TemplateArg {
    label: string,
    value: any
}

function template(templateid: string, appendto: string, args: TemplateArg[]): void {

    // Find template script on page with an id
    let template = $(`#${templateid}`).text();

    // Process arguments
    args.map((a) => { 
        template = template.split(`{{${a.label}}}`).join(a.value);
    });

    // Append templated element
    $(`#${appendto}`).append(template);
}
