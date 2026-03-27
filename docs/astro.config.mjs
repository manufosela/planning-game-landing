// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '/docs',
	integrations: [
		starlight({
			title: 'Planning Game XP',
			logo: {
				src: './src/assets/logo.png',
			},
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				es: { label: 'Español', lang: 'es' },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/manufosela/planning-game-xp' },
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Getting Started',
					translations: { es: 'Primeros Pasos' },
					items: [
						{ label: 'Introduction', slug: 'getting-started/introduction', translations: { es: 'Introducción' } },
						{ label: 'Installation', slug: 'getting-started/installation', translations: { es: 'Instalación' } },
						{ label: 'Quick Start', slug: 'getting-started/quick-start', translations: { es: 'Inicio Rápido' } },
					],
				},
				{
					label: 'Guides',
					translations: { es: 'Guías' },
					items: [
						{ label: 'XP Workflow', slug: 'guides/xp-workflow', translations: { es: 'Flujo de Trabajo XP' } },
						{ label: 'MCP Server', slug: 'guides/mcp-server', translations: { es: 'Servidor MCP' } },
						{ label: 'Cards & Sprints', slug: 'guides/cards-sprints' },
						{ label: 'Pipeline Tracking', slug: 'guides/pipeline', translations: { es: 'Seguimiento de Pipeline' } },
					],
				},
				{
					label: 'MCP Server',
					translations: { es: 'Servidor MCP' },
					items: [
						{ label: 'Install', slug: 'mcp/install', translations: { es: 'Instalar' } },
						{ label: 'Multi-Instance', slug: 'mcp/multi-instance', translations: { es: 'Multi-Instancia' } },
					],
				},
				{
					label: 'Self-Hosted',
					translations: { es: 'Auto-Alojado' },
					items: [
						{ label: 'Deploy Your Own', slug: 'self-hosted/setup', translations: { es: 'Despliega el Tuyo' } },
					],
				},
				{
					label: 'Reference',
					translations: { es: 'Referencia' },
					items: [
						{ label: 'MCP Tools', slug: 'reference/mcp-tools', translations: { es: 'Herramientas MCP' } },
						{ label: 'Card API', slug: 'reference/card-api' },
						{ label: 'Configuration', slug: 'reference/configuration', translations: { es: 'Configuración' } },
					],
				},
				{
					label: 'Architecture',
					translations: { es: 'Arquitectura' },
					items: [
						{ label: 'Overview', slug: 'architecture/overview', translations: { es: 'Visión General' } },
						{ label: 'Data Model', slug: 'architecture/data-model', translations: { es: 'Modelo de Datos' } },
					],
				},
				{
					label: 'FAQ',
					slug: 'faq',
				},
			],
		}),
	],
});
