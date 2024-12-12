import { IconButton, Tooltip } from '@syntatis/kubrick';
import { __ } from '@wordpress/i18n';
import { helpFilled, Icon } from '@wordpress/icons';
import styles from './HelpTip.module.scss';

export const HelpTip = ( { children } ) => {
	return (
		<Tooltip content={ children } placement="right">
			<IconButton
				label={ __(
					'Helpful information',
					'syntatis-feature-flipper'
				) }
				className={ styles.icon }
			>
				<Icon icon={ helpFilled } />
			</IconButton>
		</Tooltip>
	);
};