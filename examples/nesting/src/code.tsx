import * as React from 'react';
import { renderer } from '../../../src/';
import { Rectangle } from '../../../src/';
import { Text } from '../../../src/';

(async () => {
    await renderer(
        <>
            <Rectangle style={{ width: 200, height: 100, backgroundColor: '#dd55aa' }} />
            <Rectangle name="Blue rect" style={{ width: 100, height: 50, backgroundColor: '#00ffff' }} />
            <Rectangle width={50} height={25} style={{ backgroundColor: '#0f00ff' }} />
            <Text characters="text" style={{ color: '#ffffff' }} />
        </>
    );
    figma.closePlugin();
})();