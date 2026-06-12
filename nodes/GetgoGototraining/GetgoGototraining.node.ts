import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class GetgoGototraining implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Getgo Gototraining',
                name: 'N8nDevGetgoGototraining',
                icon: { light: 'file:./getgo-gototraining.svg', dark: 'file:./getgo-gototraining.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'GoToTraining API enables developers to integrate online training into proprietary LMS.',
                defaults: { name: 'Getgo Gototraining' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevGetgoGototrainingApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
