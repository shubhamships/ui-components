import { useEffect, useRef } from "react";
import * as THREE from "three";

export const ThreeScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const viewPort = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const camera = new THREE.PerspectiveCamera(
      75,
      viewPort.width / viewPort.height,
      0.1,
    1000
    );
    camera.position.set(0, 0, 300);  
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(viewPort.width, viewPort.height);
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    const createGlobe = () => {
      const globeGeometry = new THREE.SphereGeometry(50, 64, 64);
      const globeTexture = new THREE.TextureLoader().load('/assets/world-map-texture.jpg');
      const globeMaterial = new THREE.MeshBasicMaterial({ map: globeTexture });
      const globe = new THREE.Mesh(globeGeometry, globeMaterial);
      scene.add(globe);
      return globe;
    };

    const createPackage = () => {
      const packageGeometry = new THREE.BoxGeometry(2, 2, 2);
      const packageTexture = new THREE.TextureLoader().load('/assets/package-texture.jpg');
      const packageMaterial = new THREE.MeshBasicMaterial({ map: packageTexture });
      const packageBox = new THREE.Mesh(packageGeometry, packageMaterial);
      packageBox.position.set(0, 0, 0);
      scene.add(packageBox);
      return packageBox;
    };

    const createPlane = () => {
      const planeGeometry = new THREE.BoxGeometry(3, 1, 1);
      const planeTexture = new THREE.TextureLoader().load('/assets/plane-texture.jpg');
      const planeMaterial = new THREE.MeshBasicMaterial({ map: planeTexture });
      const plane = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.position.set(0, 20, 0);
      scene.add(plane);
      return plane;
    };

    const createTruck = () => {
      const truckGeometry = new THREE.BoxGeometry(5, 2, 2);
      const truckTexture = new THREE.TextureLoader().load('/assets/truck-texture.jpg');
      const truckMaterial = new THREE.MeshBasicMaterial({ map: truckTexture });
      const truck = new THREE.Mesh(truckGeometry, truckMaterial);
      truck.position.set(0, 5, 0);
      scene.add(truck);
      return truck;
    };

    const createDeliveryTruck = () => {
      const deliveryTruckGeometry = new THREE.BoxGeometry(5, 2, 2);
      const deliveryTruckMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFF00 });
      const deliveryTruck = new THREE.Mesh(deliveryTruckGeometry, deliveryTruckMaterial);
      deliveryTruck.position.set(0, -10, 0);
      scene.add(deliveryTruck);
      return deliveryTruck;
    };

    const globe = createGlobe();
    const packageBox = createPackage();
    const plane = createPlane();
    const truck = createTruck();
    const deliveryTruck = createDeliveryTruck();

    let frame = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.001;

      if (frame > 100) {
        packageBox.position.x += 0.05;
      }

      if (frame > 200) {
        plane.position.x += 0.1;
        if (plane.position.x > 100) plane.position.x = -100;
      }

      if (frame > 300) {
        truck.position.x += 0.05;
      }

      if (frame > 400) {
        if (deliveryTruck.position.x < 50) {
          deliveryTruck.position.x += 0.1;
        }
      }

      frame++;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (globe) {
        globe.geometry.dispose();
        globe.material.dispose();
        if (globe.material.map) {
          (globe.material.map as THREE.Texture).dispose();
        }
      }

      if (packageBox) {
        packageBox.geometry.dispose();
        packageBox.material.dispose();
      }

      if (plane) {
        plane.geometry.dispose();
        plane.material.dispose();
      }

      if (truck) {
        truck.geometry.dispose();
        truck.material.dispose();
      }

      if (deliveryTruck) {
        deliveryTruck.geometry.dispose();
        deliveryTruck.material.dispose();
      }

      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef}></div>;
};
