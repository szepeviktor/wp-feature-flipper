import { __ } from '@wordpress/i18n';
import { Fieldset, Form, useSettingsContext } from '../form';
import {
	CommentsFieldset,
	GutenbergFieldset,
	RevisionsFieldset,
	SwitchFieldset,
} from '../fieldset';
import { HelpContent } from '../components';

export const GeneralTab = () => {
	const { inlineData } = useSettingsContext();

	return (
		<Form>
			<Fieldset>
				<GutenbergFieldset />
				<SwitchFieldset
					isSelected={
						inlineData.$wp.themeSupport.widgetsBlockEditor === true
							? undefined
							: false
					}
					isDisabled={
						inlineData.$wp.themeSupport.widgetsBlockEditor === true
							? undefined
							: true
					}
					name="block_based_widgets"
					id="block-based-widgets"
					title={ __(
						'Block-based Widgets',
						'syntatis-feature-flipper'
					) }
					label={ __(
						'Enable the block-based widgets',
						'syntatis-feature-flipper'
					) }
					description={
						inlineData.$wp.themeSupport.widgetsBlockEditor
							? __(
									'If switched off, the block-based widgets will be disabled and the classic widgets will be used.',
									'syntatis-feature-flipper'
							  )
							: __(
									'The current theme in-use does not support block-based widgets.',
									'syntatis-feature-flipper'
							  )
					}
				/>
				<CommentsFieldset />
				<RevisionsFieldset />
				<SwitchFieldset
					name="embed"
					id="embed"
					title={ __( 'Embeds', 'syntatis-feature-flipper' ) }
					label={ __(
						'Enable post embedding',
						'syntatis-feature-flipper'
					) }
					help={
						<HelpContent>
							<p>
								{ __(
									"The Embed feature in WordPress allows you to embed a post, page, or custom post type into another post or page. It's a way to easily share and reference your own content within your website or within other WordPress sites.",
									'syntatis-feature-flipper'
								) }
							</p>
							<p>
								{ __(
									"If you're not planning to use this feature, you can can always disable it.",
									'syntatis-feature-flipper'
								) }
							</p>
						</HelpContent>
					}
					description={ __(
						'If switched off, other sites will not be able to embed content from your site, and vice-versa.',
						'syntatis-feature-flipper'
					) }
				/>
				<SwitchFieldset
					name="self_ping"
					id="self-ping"
					title={ __( 'Self-ping', 'syntatis-feature-flipper' ) }
					label={ __(
						'Enable self-pingbacks',
						'syntatis-feature-flipper'
					) }
					description={ __(
						'If switched off, WordPress will not send pingbacks to your own site.',
						'syntatis-feature-flipper'
					) }
					help={
						<HelpContent readmore="https://wordpress.org/documentation/article/trackbacks-and-pingbacks/#pingbacks">
							<p>
								{ __(
									'Pingbacks in WordPress are automatic notifications sent when one blog links to another.',
									'syntatis-feature-flipper'
								) }
							</p>
							<p>
								{ __(
									'If a post links to a pingback-enabled post on another site, the linked site gets a notification that appears as a comment, encouraging interaction between bloggers.',
									'syntatis-feature-flipper'
								) }
							</p>
							<p>
								{ __(
									'However, WordPress also sends pingbacks for internal links within the same site by default, which can result in unnecessary and sometimes annoying self-pings. Disabling self-pingbacks can help keep your comments section clean and relevant.',
									'syntatis-feature-flipper'
								) }
							</p>
						</HelpContent>
					}
				/>
				<SwitchFieldset
					name="feeds"
					id="feeds"
					title={ __( 'Feeds', 'syntatis-feature-flipper' ) }
					label={ __(
						'Enable RSS feeds',
						'syntatis-feature-flipper'
					) }
					description={ __(
						'If switched off, the RSS feed URLs will not be accessible.',
						'syntatis-feature-flipper'
					) }
					help={
						<HelpContent>
							<p>
								{ __(
									'An RSS feed, which stands for "Really Simple Syndication" or "Rich Site Summary", is a standardized format that allows users to receive updates of your site content, usually through a feed reader such as Feedly, Inoreader or Reeder app.',
									'syntatis-feature-flipper'
								) }
							</p>
							<p>
								{ __(
									'Disabling feeds can help prevent content scraping and reduce server load.',
									'syntatis-feature-flipper'
								) }
							</p>
						</HelpContent>
					}
				/>
			</Fieldset>
		</Form>
	);
};
