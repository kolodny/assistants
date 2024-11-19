import { AgentWrapper } from '../types';

type Imported = Promise<{ default: AgentWrapper }>;

function loadAgent(wrapper: Imported) {
    return new Promise<any>((resolve, reject) => {
        wrapper.then((module) => {
            resolve(module.default);
        }).catch(err => {
            reject(err);
        });
    });
}

export const agents: Record<string, any> = {
  Bonzi: () => loadAgent(import('./Bonzi')),
  Clippy: () => loadAgent(import('./Clippy')),
  F1: () => loadAgent(import('./F1')),
  Genie: () => loadAgent(import('./Genie')),
  Genius: () => loadAgent(import('./Genius')),
  Links: () => loadAgent(import('./Links')),
  Merlin: () => loadAgent(import('./Merlin')),
  Peedy: () => loadAgent(import('./Peedy')),
  Rocky: () => loadAgent(import('./Rocky')),
  Rover: () => loadAgent(import('./Rover')),
};
