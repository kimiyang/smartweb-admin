import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
    initialState: {
        folios: [
            { name: 'China Internet', id: 1 },
            { name: 'Low Beta', id: 2 },
        ]
    }
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/folios'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
